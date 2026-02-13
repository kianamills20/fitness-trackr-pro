import { Link } from "react-router-dom";

export default function RoutineList({ routines }) {
  return (
    <ul>
      {routines.map((routine) => (
        <RoutineListItem key={routine.id} routine={routine} />
      ))}
    </ul>
  );
}

function RoutineListItem({ routine }) {
  return (
    <li>
      <p>
        <Link to={"/routines/" + routine.id}>{routine.name}</Link>
      </p>
    </li>
  );
}
