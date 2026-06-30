import WorkspaceStore from "./WorkspaceStore";
import WorkspaceEvents from "../events/WorkspaceEvents";
import WorkspaceEventTypes from "../events/WorkspaceEventTypes";

class WorkspaceActions {

  /*
  ==========================
      TOOL
  ==========================
  */

  setCurrentTool(

    currentTool,

  ) {

    WorkspaceStore.setState({

      currentTool,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.TOOL_CHANGED,

      currentTool,

    );

  }

  /*
  ==========================
      PRESENTATION
  ==========================
  */

  setPresentation(

    presentation,

  ) {

    WorkspaceStore.setState({

      presentation,

    });

    WorkspaceEvents.emit(

      presentation
        ? WorkspaceEventTypes.PRESENTATION_ENTER
        : WorkspaceEventTypes.PRESENTATION_EXIT,

      presentation,

    );

  }

  /*
  ==========================
      PROJECT
  ==========================
  */

  setActiveProject(

    activeProject,

  ) {

    WorkspaceStore.setState({

      activeProject,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.PROJECT_CHANGED,

      activeProject,

    );

  }

  setActiveDocument(

    activeDocument,

  ) {

    WorkspaceStore.setState({

      activeDocument,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.DOCUMENT_CHANGED,

      activeDocument,

    );

  }

  /*
  ==========================
      PANEL
  ==========================
  */

  setActivePanel(

    activePanel,

  ) {

    WorkspaceStore.setState({

      activePanel,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.PANEL_CHANGED,

      activePanel,

    );

  }

  /*
  ==========================
      SELECTION
  ==========================
  */

  setSelection(

    selection,

  ) {

    WorkspaceStore.setState({

      selection,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.SELECTION_CHANGED,

      selection,

    );

  }

  clearSelection() {

    WorkspaceStore.setState({

      selection: null,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.SELECTION_CHANGED,

      null,

    );

  }

  /*
  ==========================
      CLIPBOARD
  ==========================
  */

  setClipboard(

    clipboard,

  ) {

    WorkspaceStore.setState({

      clipboard,

    });

    if (

      WorkspaceEventTypes.CLIPBOARD_CHANGED

    ) {

      WorkspaceEvents.emit(

        WorkspaceEventTypes.CLIPBOARD_CHANGED,

        clipboard,

      );

    }

  }

  clearClipboard() {

    WorkspaceStore.setState({

      clipboard: null,

    });

    if (

      WorkspaceEventTypes.CLIPBOARD_CLEARED

    ) {

      WorkspaceEvents.emit(

        WorkspaceEventTypes.CLIPBOARD_CLEARED,

        null,

      );

    }

  }

  /*
  ==========================
      ZOOM
  ==========================
  */

  setZoom(

    zoom,

  ) {

    WorkspaceStore.setState({

      zoom,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.ZOOM_CHANGED,

      zoom,

    );

  }

  zoomIn() {

    const {

      zoom,

    } = WorkspaceStore.getState();

    const newZoom = Math.min(

      zoom + 10,

      400,

    );

    WorkspaceStore.setState({

      zoom: newZoom,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.ZOOM_CHANGED,

      newZoom,

    );

  }

  zoomOut() {

    const {

      zoom,

    } = WorkspaceStore.getState();

    const newZoom = Math.max(

      zoom - 10,

      10,

    );

    WorkspaceStore.setState({

      zoom: newZoom,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.ZOOM_CHANGED,

      newZoom,

    );

  }

  resetZoom() {

    WorkspaceStore.setState({

      zoom: 100,

    });

    WorkspaceEvents.emit(

      WorkspaceEventTypes.ZOOM_CHANGED,

      100,

    );

  }

}

export default new WorkspaceActions();
