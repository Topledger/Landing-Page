import { useRouter } from "next/router";

function Programs() {
  const router = useRouter();
  const { programName } = router.query;

  return <>{programName}</>;
}

export default Programs;
