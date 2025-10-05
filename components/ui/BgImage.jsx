import { ImageBackground } from "react-native"

export default function BgImage ({path}) {
   return(
    <ImageBackground
        source={path}
        style={{ width: "100%", height: "100%" }}
      />
   )
}