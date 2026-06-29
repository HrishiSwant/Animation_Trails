import {

  useEffect,

  useState,

} from "react";

import WorkspaceStore from "../../core/workspace/state/WorkspaceStore";
import WorkspaceActions from "../../core/workspace/state/WorkspaceActions";

export default function useWorkspace() {

  const [

    state,

    setState,

  ] = useState(

    WorkspaceStore.getState(),

  );

  useEffect(() => {

    return WorkspaceStore.subscribe(

      setState,

    );

  }, []);

  return {

    /*
    ==========================
        STATE
    ==========================
    */

    ...state,

    /*
    ==========================
        ACTIONS
    ==========================
    */

    setCurrentTool:

      WorkspaceActions.setCurrentTool.bind(

        WorkspaceActions,

      ),

    setPresentation:

      WorkspaceActions.setPresentation.bind(

        WorkspaceActions,

      ),

    setActiveProject:

      WorkspaceActions.setActiveProject.bind(

        WorkspaceActions,

      ),

    setActiveDocument:

      WorkspaceActions.setActiveDocument.bind(

        WorkspaceActions,

      ),

    setActivePanel:

      WorkspaceActions.setActivePanel.bind(

        WorkspaceActions,

      ),

    setSelection:

      WorkspaceActions.setSelection.bind(

        WorkspaceActions,

      ),

    clearSelection:

      WorkspaceActions.clearSelection.bind(

        WorkspaceActions,

      ),

    setClipboard:

      WorkspaceActions.setClipboard.bind(

        WorkspaceActions,

      ),

    clearClipboard:

      WorkspaceActions.clearClipboard.bind(

        WorkspaceActions,

      ),

    setZoom:

      WorkspaceActions.setZoom.bind(

        WorkspaceActions,

      ),

    zoomIn:

      WorkspaceActions.zoomIn.bind(

        WorkspaceActions,

      ),

    zoomOut:

      WorkspaceActions.zoomOut.bind(

        WorkspaceActions,

      ),

    resetZoom:

      WorkspaceActions.resetZoom.bind(

        WorkspaceActions,

      ),

  };

}
