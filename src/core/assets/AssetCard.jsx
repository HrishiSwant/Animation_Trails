import "./AssetCard.css";

export default function AssetCard({

  asset,

  onDelete,

}) {

  return (

    <div className="asset-card">

      <div className="asset-preview">

        📄

      </div>

      <h3>

        {asset.name}

      </h3>

      <p>

        {asset.type}

      </p>

      <button

        onClick={() =>
          onDelete(
            asset.id
          )
        }

      >

        Delete

      </button>

    </div>

  );

}
