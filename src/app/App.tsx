import AppRouter from "./Router/ui/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { classNames } from "@/shared/lib/classNames";
import { useTheme } from "./Theme/ui";
import { Sidebar } from "@/widgets/Sidebar";


const App: React.FC = () => {
  const [theme] = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
