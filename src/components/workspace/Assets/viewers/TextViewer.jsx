export default function TextViewer({

  asset,

}) {

  try {

    const text = atob(

      asset.data.split(",")[1]

    );

    return (

      <pre className="viewer-text">

        {text}

      </pre>

    );

  } catch {

    return (

      <div className="viewer-placeholder">

        Unable to preview text.

      </div>

    );

  }

}
