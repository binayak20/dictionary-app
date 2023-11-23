import { Typography } from "antd";
import Container from "../../components/container";
import TabComponent from "../../components/tab-component";

const { Title } = Typography;
const Main = (): JSX.Element => (
  <Container>
    <Title>Dictionary App</Title>
    <TabComponent />
  </Container>
);

export default Main;
