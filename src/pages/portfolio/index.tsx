import { Button, Col, Image, Layout, Row, Typography } from "antd";
import logo from '../../assets/Logo.png';
import user from '../../assets/Me.svg';
import './styles.css';

export function App() {
    return (
        <Layout className="portfolio-layout-aling">
            <Row className="portfolio-header-styles" justify="center" align="middle">
                <Col span={12}>
                    <Image
                        style={{ padding: 15 }}
                        src={logo}
                        alt="Portfolio Mike"
                    />
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                    <Button
                        type="text"
                        style={{
                            margin: '0 10px',
                            color: "#ffff",
                            fontWeight: "bold",
                            fontSize: 18
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        type="text"
                        style={{
                            margin: '0 10px',
                            color: "#ffff",
                            fontWeight: "bold",
                            fontSize: 18
                        }}
                    >
                        About
                    </Button>
                    <Button
                        type="text"
                        style={{
                            margin: '0 10px',
                            color: "#ffff",
                            fontWeight: "bold",
                            fontSize: 18
                        }}
                    >
                        Lab
                    </Button>
                </Col>
            </Row>
            <Row className="portfolio-body-styles" align="middle">
                <Image
                    src={user}
                    alt="Portfolio Mike"
                />
                <Typography.Title
                    level={1}
                    style={{ color: "#FFFF" }}
                >
                    I'm a Software Developer.
                    <Row className="portfolio-body-styles">
                        <Typography.Title
                            level={5}
                            italic
                            style={{ color: "#FFFF" }}
                        >
                            Atualmente, sou Desenvolvedor no Grupo ICTS.
                        </Typography.Title>
                    </Row>
                </Typography.Title>
            </Row>
            <Row className="portfolio-body-styles">
                <Typography.Title
                    level={4}
                    style={{ color: "#FFFF" }}
                >
                    {<p>Sou um Desenvolvedor Front-end com mais de 2 (dois) anos de experiência na indústria.<br></br>
                        Tenho uma ampla gama de projetos realizados tanto dentro quanto fora do polo industrial <br></br>
                        de Manaus, e estou constantemente em busca de novos conhecimentos e desafios para <br></br>
                        aprimorar minha atuação.</p>}
                </Typography.Title>
            </Row>

        </Layout>
    );
}
