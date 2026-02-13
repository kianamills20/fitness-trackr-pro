import { useState } from "react";
import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityList({ activities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  return (
    <li>
    <Link to={"/activities/" + activity.id}>{activity.name}</Link>
    </li>
  );
}
