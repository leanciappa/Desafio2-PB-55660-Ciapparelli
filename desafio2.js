class  ProductManager{
        
    id = 0;
    products =[];

    addProduct(/*title,*/ description, price, /*thumbnail, code,*/ stock){
        this.products.push({ id: this.id, price, description, stock})
        this.id = this.id+1;
    }
    getAllProducts(){
        return this.products;
    }

    getProductById(id){
        return this.products.find(prod => prod.id === parseInt(id));
    }
}
