import { MainScreen } from "../common/components/MainScreen";
import { Meta } from "../common/utils/Meta";
import s from "../styles/app.module.scss";

export default function Home() {
  return (
    <>
      <Meta title="Portfolio" description="Next project portfolio" />

      <div className={s.app}>
        <MainScreen />
      </div>
    </>
  );
}
