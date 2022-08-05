import { FC } from 'react';
import data from '../../data/data.json';

interface IProps {
	getTitleAndBody: () => any;
	getIdAndTitle: () => any;
}

interface TitleBody {
	title: string;
	body: string;
}

interface IdTitle {
	id: number;
	title: string;
}

const withPost = (WrappedComponent: FC<IProps>) => {
	const getTitleAndBody = (): TitleBody[] => {
		const bodyTitle: TitleBody[] = [];
		data.forEach(item => {
			bodyTitle.push({
				title: item.title,
				body: item.body
			});
		});

		return bodyTitle;
	};

	const getIdAndTitle = (): IdTitle[] => {
		const idTitle: IdTitle[] = [];
		data.forEach(item => {
			idTitle.push({
				id: item.id,
				title: item.title
			});
		});

		return idTitle;
	};

	return (props: any) => {
		return (
			<WrappedComponent
				getTitleAndBody={getTitleAndBody}
				getIdAndTitle={getIdAndTitle}
				{...props}
			/>
		);
	};
};

export default withPost;
