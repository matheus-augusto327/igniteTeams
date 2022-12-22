import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./syles";

type Props = TouchableOpacityProps & {};

export function ButtonIcon({}: Props) {
  return (
    <Container>
      <Icon name="home" type="SECONDARY" />
    </Container>
  );
}
