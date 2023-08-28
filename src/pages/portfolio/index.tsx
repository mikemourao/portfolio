import { Button, Card, Col, Image, Layout, Row, Typography } from "antd";
import logo from '../../assets/Logo.png';
import smd from '../../assets/smd.png';
import dash from '../../assets/dash.png';
import javascriptIcon from '../../assets/js.png'
import reactIcon from '../../assets/react_icon.png'
import typescriptIcon from '../../assets/icons8-typescript-100.png'
import nodeIcon from '../../assets/node.png'
import figma from '../../assets/figma.png'
import blenderIcon from '../../assets/blender.png'
import print3dIcon from '../../assets/3d.png'
import user from '../../assets/Me.svg';
import './styles.css';

export function App() {
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                        onClick={scrollToAbout}
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
            {/* about */}
            <Row id="about-section" className="portfolio-body-styles">
                <Typography.Title
                    level={1}
                    style={{ color: "#FFFF", marginBottom: -5 }}
                >
                    Experiência de Trabalho
                </Typography.Title>
            </Row>
            <Row className="portfolio-body-styles">
                <Row gutter={30}>
                    <Col span={12}>
                        <Card bordered={false} className="portfolio-card-styles">
                            <Row>
                                <Col span={12}>
                                    <Image
                                        style={{ padding: 15 }}
                                        src={smd}
                                        alt="Portfolio Mike"
                                    />
                                </Col>
                                <Col span={12}>
                                    <Typography.Title
                                        level={3}
                                        style={{ color: "#FFFF" }}
                                    >
                                        Experiência de Trabalho
                                    </Typography.Title>
                                    <Typography.Title
                                        italic
                                        style={{ color: "#FFFF", fontSize: 12 }}
                                    >
                                        Descrição da experiência de trabalho
                                    </Typography.Title>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false} className="portfolio-card-styles">
                            <Row>
                                <Col span={12}>
                                    <Image
                                        style={{ padding: 15 }}
                                        src={dash}
                                        alt="Portfolio Mike"
                                    />
                                </Col>
                                <Col span={12}>
                                    <Typography.Title
                                        level={3}
                                        style={{ color: "#FFFF" }}
                                    >
                                        Experiência de Trabalho
                                    </Typography.Title>
                                    <Typography.Title
                                        italic
                                        style={{ color: "#FFFF", fontSize: 12 }}
                                    >
                                        Descrição da experiência de trabalho
                                    </Typography.Title>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Row>
            <Row className="portfolio-body-styles">
                <Row gutter={30}>
                    <Col span={12}>
                        <Card bordered={false} className="portfolio-card-styles">
                            <Row>
                                <Col span={12}>
                                    <Image
                                        style={{ padding: 15 }}
                                        src={smd}
                                        alt="Portfolio Mike"
                                    />
                                </Col>
                                <Col span={12}>
                                    <Typography.Title
                                        level={3}
                                        style={{ color: "#FFFF" }}
                                    >
                                        Experiência de Trabalho
                                    </Typography.Title>
                                    <Typography.Title
                                        italic
                                        style={{ color: "#FFFF", fontSize: 12 }}
                                    >
                                        Descrição da experiência de trabalho
                                    </Typography.Title>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card bordered={false} className="portfolio-card-styles">
                            <Row>
                                <Col span={12}>
                                    <Image
                                        style={{ padding: 15 }}
                                        src={dash}
                                        alt="Portfolio Mike"
                                    />
                                </Col>
                                <Col span={12}>
                                    <Typography.Title
                                        level={3}
                                        style={{ color: "#FFFF" }}
                                    >
                                        Experiência de Trabalho
                                    </Typography.Title>
                                    <Typography.Title
                                        italic
                                        style={{ color: "#FFFF", fontSize: 12 }}
                                    >
                                        Descrição da experiência de trabalho
                                    </Typography.Title>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Row>
            <Row className="portfolio-body-styles" align="middle">
                <Typography.Title
                    level={1}
                    style={{ color: "#FFFF" }}
                >
                    Tecnologias
                </Typography.Title>
            </Row>
            <Row className="portfolio-body-styles">
                <Typography.Title
                    italic
                    level={5}
                    style={{ color: "#FFFF", marginTop: -30 }}
                >
                    {<p>Uma ampla gama de tecnologias, tanto no âmbito do desenvolvimento de software quanto em outras áreas,<br></br>
                        compõe meu cenário atual. A seguir, destaco algumas delas:</p>}
                </Typography.Title>
            </Row>
            <Row className="portfolio-body-styles" style={{marginTop: 0}}>
                <Col>
                    <Image
                        preview={false}
                        style={{ padding: 15 }}
                        src={javascriptIcon}
                        alt="javascript"
                    />
                    <Image
                        preview={false}
                        style={{ padding: 15 }}
                        src={reactIcon}
                        alt="react"
                    />
                    <Image
                        preview={false}
                        style={{ padding: 15 }}
                        src={typescriptIcon}
                        alt="typescript"
                    />
                    <Image
                        preview={false}
                        style={{ padding: 15 }}
                        src={nodeIcon}
                        alt="Node"
                    />
                    <Image
                        preview={false}
                        style={{ padding: 15 }}
                        src={figma}
                        alt="Figma"
                    />
                </Col>
            </Row>
            <Row className="portfolio-body-styles" style={{marginTop: 0}}>
                <Col>
                    <Image
                        preview={false}
                        style={{ padding: 15 }}
                        src={blenderIcon}
                        alt="Blender"
                    />
                    <Image
                        preview={false}
                        style={{ padding: 15 }}
                        src={print3dIcon}
                        alt="Portfolio Mike"
                    />
                </Col>
            </Row>
        </Layout>
    );
}
