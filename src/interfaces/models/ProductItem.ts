export interface Category {
	id: string | number;
	name: string;
	products: Product[];
}

export interface Product {
	id: string | number;
	name: string;
	price: number;
	available: boolean;
	image: Image;
}

export interface Image {
	url: string;
	title: string;
}
