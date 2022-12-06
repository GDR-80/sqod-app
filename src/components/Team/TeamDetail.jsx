import { useParams, Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteTeamButton from "../Buttons/DeleteTeamButton";
import Container from "../UI/Container";
import Loader from "../UI/Loader";
import { UPDATE_STORE } from "../../redux/types";
import TeamList from "./TeamList";
import BackgroundCard from "../UI/BackgroundCard";
import FixtureList from "../Fixtures/FixtureList";
import axios from "axios";
import { useEffect, useState } from "react";

const TeamDetail = () => {
  const { teamId } = useParams();
  const teams = useSelector((state) => state.teams);

  const currentUser = useSelector((state) => state.currentUser);
  const token = useSelector((state) => state.token);

  const { children } = currentUser;

  const dispatch = useDispatch();

  const team = teams && teams.find((team) => team.id === Number(teamId));
  if (!team) {
    return <Navigate replace to={"/dashboard"} />;
  }

  const childrenOnTeam = children.filter(
    (child) => child.team_id === Number(teamId)
  );

  if (!childrenOnTeam) {
    return <Loader />;
  }

  const onApprove = async (id, isApproved) => {
    isApproved === 0 ? (isApproved = 1) : (isApproved = 0);

    const results = await axios.post("http://localhost:6001/setApproved", {
      id,
      isApproved,
    });

    const newData = await axios.get("http://localhost:6001/syncStore", {
      headers: { token },
    });

    dispatch({
      type: UPDATE_STORE,
      payload: newData.data,
    });
  };

  return (
    <>
      <Container>
        <BackgroundCard>
          <TeamList
            team={team}
            onApprove={onApprove}
            childrenOnTeam={childrenOnTeam}
            currentUser={currentUser}
          />
          <FixtureList teamId={teamId} />
          <div>
            <Link to="/dashboard">
              <button className="btn btn_primary">Dashboard</button>
            </Link>

            {currentUser.user_type === 0 && (
              <>
                <Link to={`/dashboard/manager/edit-team/${teamId}`}>
                  <button className="btn btn_edit ml">Edit Team</button>
                </Link>
                <DeleteTeamButton />
              </>
            )}
          </div>
        </BackgroundCard>
      </Container>
    </>
  );
};

export default TeamDetail;
