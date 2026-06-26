import Notes from "../workspace/Notes/Notes";
import Sketch from "../workspace/Sketch/Sketch";
import Assets from "../workspace/Assets/Assets";
import Tasks from "../workspace/Tasks/Tasks";
import StorageInspector from "../workspace/Storage/StorageInspector";
import ExportCenter from "../workspace/Export/ExportCenter";
import WorkspaceDashboard from "../workspace/WorkspaceDashboard/WorkspaceDashboard";

export default function PresentationRenderer({

  tool,

}) {

  switch (tool) {

    case "dashboard":

      return (

        <WorkspaceDashboard

          setCurrentTool={() => {}}

          startPresentation={() => {}}

        />

      );

    case "notes":

      return <Notes />;

    case "sketch":

      return <Sketch />;

    case "assets":

      return <Assets />;

    case "tasks":

      return <Tasks />;

    case "storage":

      return <StorageInspector />;

    case "export":

      return <ExportCenter />;

    default:

      return null;

  }

}
