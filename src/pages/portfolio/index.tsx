import { Button, Col, Image, Layout, Row } from "antd";
import logo from '../../assets/Logo.png';
import './styles.css';

export function App() {
    return (
        <Layout className="portfolio-layout-aling">
            <Row className="portfolio-header-styles" justify="center" align="middle"> {/* Adicione align="middle" para alinhar ao centro verticalmente */}
                <Col span={12}>
                    <Image
                        style={{ padding: 5 }}
                        src={logo}
                        alt="Portfolio Mike"
                    />
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                    <Button type="text" style={{ margin: '0 8px', color: "#ffff", fontWeight: "bold"}}>Home</Button>
                    <Button type="text" style={{ margin: '0 8px', color: "#ffff", fontWeight: "bold"}}>About</Button>
                    <Button type="text" style={{ margin: '0 8px', color: "#ffff", fontWeight: "bold"}}>Lab</Button>
                </Col>
            </Row>
        </Layout>
    );
}
