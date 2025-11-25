function countCategories(categories){
    const result=categories.reduce((acc,item)=>{
        acc[item]=(acc[item]||0)+1;
        return acc;
    },{});
    console.log(result);
}
const categories=["electronics","clothing","electronics","toys","clothing","toys","toys"];
countCategories(categories);
