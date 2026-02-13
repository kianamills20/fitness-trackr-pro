import { deleteActivity } from "../api/activities";

export default function ActivityDetails() {
  const { token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    const syncActivity = async () => {
      const data = await getActivity(id);
      setActivity(data);
    };
    syncActivity(data);
  }, [id]);

  const tryDelete = async () => {
    setError(null);
    try {
      await deleteActivity(token, activity.id);
      navigate("/activities");
    } catch (e) {
      setError(e.message);
    }
  };

  if (!activity) return <p>Loading...</p>;

  return (
    <article>
      <h1>{activity.name}</h1>
      <p>by {activity.createrName}</p>
      <p>{activity.description}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}
    </article>
  );
}
