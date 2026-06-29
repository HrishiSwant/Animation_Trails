import {

  useEffect,

  useState,

} from "react";

import DockManager from "../../core/docking/DockManager";

export default function useDock() {

  const [

    layout,

    setLayout,

  ] = useState(

    DockManager.getLayout(),

  );

  /*
  ==========================
      SUBSCRIBE
  ==========================
  */

  useEffect(() => {

    return DockManager.subscribe(

      setLayout,

    );

  }, []);

  return {

    layout,

    panels:

      DockManager.getPanels(),

    updatePanel:

      DockManager.updatePanel.bind(

        DockManager,

      ),

  };

}
