import { useEffect, useState } from "react";

import LayoutManager from "../../core/layout/LayoutManager";

export default function useLayout() {

  const [

    layout,

    setLayout,

  ] = useState(

    LayoutManager.getLayout(),

  );

  useEffect(() =>

    LayoutManager.subscribe(

      setLayout,

    ),

  []);

  return {

    layout,

    update:

      LayoutManager.update.bind(

        LayoutManager,

      ),

  };

}
