import WorkspaceStore from "./WorkspaceStore";

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

  }

  setActiveDocument(

    activeDocument,

  ) {

    WorkspaceStore.setState({

      activeDocument,

    });

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

  }

  clearSelection() {

    WorkspaceStore.setState({

      selection: null,

    });

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

  }

  clearClipboard() {

    WorkspaceStore.setState({

      clipboard: null,

    });

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

  }

  zoomIn() {

    const {

      zoom,

    } = WorkspaceStore.getState();

    WorkspaceStore.setState({

      zoom: Math.min(

        zoom + 10,

        400,

      ),

    });

  }

  zoomOut() {

    const {

      zoom,

    } = WorkspaceStore.getState();

    WorkspaceStore.setState({

      zoom: Math.max(

        zoom - 10,

        10,

      ),

    });

  }

  resetZoom() {

    WorkspaceStore.setState({

      zoom: 100,

    });

  }

}

export default new WorkspaceActions();
