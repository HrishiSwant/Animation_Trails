import {

  useEffect,

  useState,

} from "react";

import DockDragManager from "../../core/docking/DockDragManager";

export default function useDockDrag() {

  const [

    state,

    setState,

  ] = useState(

    DockDragManager.getState(),

  );

  useEffect(() => {

    return DockDragManager.subscribe(

      setState,

    );

  }, []);

  return {

    ...state,

    start:

      DockDragManager.start.bind(

        DockDragManager,

      ),

    move:

      DockDragManager.move.bind(

        DockDragManager,

      ),

    end:

      DockDragManager.end.bind(

        DockDragManager,

      ),

  };

}
