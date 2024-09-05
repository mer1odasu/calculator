import IndicatorsTable from './IndicatorsTable';

interface Indicators {
  id: number;
  name: string;
  metrics: string;
}

const IndicatorsPage: React.FC = () => {
  const roles = ["Администратор", "Менеджер", "Пользователь"];
  const columns = ['id', 'name', 'metrics'];
  
  const data: Indicators[] = [
    { id: 1, name: 'Olivia', metrics: '2.2.2.2.2'},
    { id: 2, name: 'James', metrics: '2.2.2.2.2'},
    { id: 3, name: 'Sophia', metrics: '2.2.2.2.2'},
    { id: 4, name: 'Liam', metrics: '2.2.2.2.2'},
    { id: 5, name: 'Emma', metrics: '2.2.2.2.2'},
    { id: 6, name: 'William', metrics: '2.2.2.2.2'},
    { id: 7, name: 'Ava', metrics: '2.2.2.2.2'},
    { id: 8, name: 'Lucas', metrics: '2.2.2.2.2'},
    { id: 9, name: 'Mia', metrics: '2.2.2.2.2'},
    { id: 10, name: 'Noah', metrics: '2.2.2.2.2'},
		{ id: 1, name: 'Olivia', metrics: '2.2.2.2.2'},
    { id: 2, name: 'James', metrics: '2.2.2.2.2'},
    { id: 3, name: 'Sophia', metrics: '2.2.2.2.2'},
    { id: 4, name: 'Liam', metrics: '2.2.2.2.2'},
    { id: 5, name: 'Emma', metrics: '2.2.2.2.2'},
    { id: 6, name: 'William', metrics: '2.2.2.2.2'},
    { id: 7, name: 'Ava', metrics: '2.2.2.2.2'},
    { id: 8, name: 'Lucas', metrics: '2.2.2.2.2'},
    { id: 9, name: 'Mia', metrics: '2.2.2.2.2'},
    { id: 10, name: 'Noah', metrics: '2.2.2.2.2'},
		{ id: 1, name: 'Olivia', metrics: '2.2.2.2.2'},
    { id: 2, name: 'James', metrics: '2.2.2.2.2'},
    { id: 3, name: 'Sophia', metrics: '2.2.2.2.2'},
    { id: 4, name: 'Liam', metrics: '2.2.2.2.2'},
    { id: 5, name: 'Emma', metrics: '2.2.2.2.2'},
    { id: 6, name: 'William', metrics: '2.2.2.2.2'},
    { id: 7, name: 'Ava', metrics: '2.2.2.2.2'},
    { id: 8, name: 'Lucas', metrics: '2.2.2.2.2'},
    { id: 9, name: 'Mia', metrics: '2.2.2.2.2'},
    { id: 10, name: 'Noah', metrics: '2.2.2.2.2'},
		{ id: 1, name: 'Olivia', metrics: '2.2.2.2.2'},
    { id: 2, name: 'James', metrics: '2.2.2.2.2'},
    { id: 3, name: 'Sophia', metrics: '2.2.2.2.2'},
    { id: 4, name: 'Liam', metrics: '2.2.2.2.2'},
    { id: 5, name: 'Emma', metrics: '2.2.2.2.2'},
    { id: 6, name: 'William', metrics: '2.2.2.2.2'},
    { id: 7, name: 'Ava', metrics: '2.2.2.2.2'},
    { id: 8, name: 'Lucas', metrics: '2.2.2.2.2'},
    { id: 9, name: 'Mia', metrics: '2.2.2.2.2'},
    { id: 10, name: 'Noah', metrics: '2.2.2.2.2'},
		{ id: 1, name: 'Olivia', metrics: '2.2.2.2.2'},
    { id: 2, name: 'James', metrics: '2.2.2.2.2'},
    { id: 3, name: 'Sophia', metrics: '2.2.2.2.2'},
    { id: 4, name: 'Liam', metrics: '2.2.2.2.2'},
    { id: 5, name: 'Emma', metrics: '2.2.2.2.2'},
    { id: 6, name: 'William', metrics: '2.2.2.2.2'},
    { id: 7, name: 'Ava', metrics: '2.2.2.2.2'},
    { id: 8, name: 'Lucas', metrics: '2.2.2.2.2'},
    { id: 9, name: 'Mia', metrics: '2.2.2.2.2'},
    { id: 10, name: 'Noah', metrics: '2.2.2.2.2'},
		{ id: 1, name: 'Olivia', metrics: '2.2.2.2.2'},
    { id: 2, name: 'James', metrics: '2.2.2.2.2'},
    { id: 3, name: 'Sophia', metrics: '2.2.2.2.2'},
    { id: 4, name: 'Liam', metrics: '2.2.2.2.2'},
    { id: 5, name: 'Emma', metrics: '2.2.2.2.2'},
    { id: 6, name: 'William', metrics: '2.2.2.2.2'},
    { id: 7, name: 'Ava', metrics: '2.2.2.2.2'},
    { id: 8, name: 'Lucas', metrics: '2.2.2.2.2'},
    { id: 9, name: 'Mia', metrics: '2.2.2.2.2'},
    { id: 10, name: 'Noah', metrics: '2.2.2.2.2'},
		{ id: 1, name: 'Olivia', metrics: '2.2.2.2.2'},
    { id: 2, name: 'James', metrics: '2.2.2.2.2'},
    { id: 3, name: 'Sophia', metrics: '2.2.2.2.2'},
    { id: 4, name: 'Liam', metrics: '2.2.2.2.2'},
    { id: 5, name: 'Emma', metrics: '2.2.2.2.2'},
    { id: 6, name: 'William', metrics: '2.2.2.2.2'},
    { id: 7, name: 'Ava', metrics: '2.2.2.2.2'},
    { id: 8, name: 'Lucas', metrics: '2.2.2.2.2'},
    { id: 9, name: 'Mia', metrics: '2.2.2.2.2'},
    { id: 10, name: 'Noah', metrics: '2.2.2.2.2'},
		{ id: 1, name: 'Olivia', metrics: '2.2.2.2.2'},
    { id: 2, name: 'James', metrics: '2.2.2.2.2'},
    { id: 3, name: 'Sophia', metrics: '2.2.2.2.2'},
    { id: 4, name: 'Liam', metrics: '2.2.2.2.2'},
    { id: 5, name: 'Emma', metrics: '2.2.2.2.2'},
    { id: 6, name: 'William', metrics: '2.2.2.2.2'},
    { id: 7, name: 'Ava', metrics: '2.2.2.2.2'},
    { id: 8, name: 'Lucas', metrics: '2.2.2.2.2'},
    { id: 9, name: 'Mia', metrics: '2.2.2.2.2'},
    { id: 10, name: 'Noah', metrics: '2.2.2.2.2'},
		
  ];

  return (
    <div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Показетели</h1>
      <IndicatorsTable columns={columns} data={data}/>
    </div>
  );
};

export default IndicatorsPage;
