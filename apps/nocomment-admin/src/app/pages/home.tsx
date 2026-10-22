import { Card, Col, Row, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Text } = Typography;

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatCard = styled(Card)`
  height: 100%;
  border-radius: 12px;
`;

export function Home() {
  return (
    <Page>
      <Title level={2}>Dashboard</Title>
      <Text type="secondary">Welcome to NoComment Gym.</Text>

      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} lg={8}>
          <StatCard>
            <Text type="secondary">Total Members</Text>
            <Title level={2}>X</Title>
          </StatCard>
        </Col>
      </Row>
    </Page>
  );
}
