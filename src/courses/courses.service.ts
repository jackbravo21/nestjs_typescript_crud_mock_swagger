import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {

    courses = COURSES;

    getCourses(): Promise<any>
    {
        return new Promise(resolve => 
        {
            resolve(this.courses);
        });
    }

    getCourse(courseId): Promise<any>
    {
       let id = Number(courseId);
        return new Promise(resolve => 
        {
            //peco para me retornar com find, tudo que tiver o course.id = id;
            const course = this.courses.find(course => course.id === id)
            //se o curso vier vazio;
            if(!course)
            {
                throw new HttpException("O curso com esse id nao existe!", 404);
            }
            resolve(course);
        });    
    }

    addCourse(course): Promise<any>
    {
        return new Promise(resolve => 
        {
            this.courses.push(course);
            resolve(this.courses);
        });
    }

    editCourse(body): Promise<any>
    {
        //refatoro os valores para ter certeza que estao vindo corretos;
        const id = Number(body.id);
        const title = body.title;
        const description = body.description;

        return new Promise(resolve =>
            {            
                //aqui eu verifico se existe o curso pelo id;
                const course = this.courses.find(course => course.id === id);

                //se nao existir;
                if(!course)
                {
                    throw new HttpException(`Este curso ${id} não existe!`, 404);                
                }

                //se existir;
                else
                {
                    //verifico o indice do curso (javaScript basico);
                    const userIndex = this.courses.findIndex(course => course.id === id);

                    //o "-1" eh porque o indice comeca por 0;
                    if(userIndex !== -1)
                    {
                        this.courses[userIndex].title           = title;
                        this.courses[userIndex].description     = description;
                    }
                }

                resolve(course);

            });
    }

    deleteCourse(query): Promise<any>
    {
        let id = Number(query);
        return new Promise(resolve => 
        {
            let index = this.courses.findIndex(course => course.id === id);

            if(index === -1)
            {
                throw new HttpException("Este curso não existe!", 404);
            }

            this.courses.splice(index, 1);
            resolve(`Curso ${id} deletado com sucesso!`);
        });
    }


}
