export type CourseItem = {
    id:string,
    title:string,
    description:string,
    image:{
        url:string,
        alt:string,
    };
};

export type APIResponse = {
    data:{
        Development:CourseItem[],
        Bussiness:CourseItem[],
        Design:CourseItem[],
        Lifestyle:CourseItem[],
    }
}