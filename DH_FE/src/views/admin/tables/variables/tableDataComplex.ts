type RowObj = {
	id: number;
	name: string;
	NID: string;
	date_registered: string;
	frequent_sickness: string;
};

const tableDataComplex: RowObj[] = [
	{
		id: 1,
		name: 'Aline',
		NID: '565789076657',
		date_registered: '12 Jan 2021',
		frequent_sickness: 'malaria'
	},
	{
		id: 2,
		name: 'Dush',
		NID: '120789076690',
		date_registered: '10 mar 2023',
		frequent_sickness: 'dep'
	},
	{
		id: 3,
		name: 'Ishimwe',
		NID: '126789076657',
		date_registered: '30 jun 2021',
		frequent_sickness: 'sleeping sickness'
	},
];
export default tableDataComplex;
