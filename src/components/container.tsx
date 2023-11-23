import { Row, Col } from "antd";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Row justify="center">
      <Col xs={24} sm={24} md={20} lg={16} xl={14}>
        {children}
      </Col>
    </Row>
  );
};

export default Container;
