import { Typography, Card } from 'antd';

const { Text } = Typography;

const Kicks = () => {
    return(
        <Card title="Ударов"
              bordered={false}>
            <Text>
                <div>Очков: 0</div>
                <div>Голов: 0</div>
                <div>Пропущено: 0</div>
                <div>Разница: 0</div>
            </Text>
        </Card>  
    );
};

export default Kicks;