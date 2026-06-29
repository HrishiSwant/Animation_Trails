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

  useEffect(

    () =>

      DockManager.subscribe(

        setLayout,

      ),

    [],

  );

  return {

    layout,

    updatePanel:

      DockManager.updatePanel.bind(

        DockManager,

      ),

  };

}
