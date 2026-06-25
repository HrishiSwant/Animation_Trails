import AssetManager from "../../core/assets/AssetManager";

export default function useAssetUpload({

  refreshAssets,

}) {

  function upload(event) {

    const file =
      event.target.files?.[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = () => {

      const asset = {

        id: Date.now(),

        name: file.name,

        type: file.type,

        size: file.size,

        createdAt:
          new Date().toISOString(),

        data:
          reader.result,

      };

      AssetManager.addAsset(
        asset
      );

      refreshAssets();

      event.target.value = "";

    };

    reader.readAsDataURL(file);

  }

  return {

    upload,

  };

}
