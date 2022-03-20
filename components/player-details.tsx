import { Typography } from "antd";

const { Title, Text } = Typography;

const PlayerDetails = () => {
    return(
        <>
            <Title level={3}>Иванов</Title>
            <Title level={3}>Иван</Title>
            <Text>
                <p>Дата рождения: 05.02.1985</p>
                <p>Место рождения: Португалия</p>
                <p>Позиция: Нападающий</p>
            </Text>
        </>
    );
};

export default PlayerDetails;