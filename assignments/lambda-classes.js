// CODE here for your Lambda Classes

class Person
{ constructor(attributes)
{
this.name = attributes.name
this.age = attributes.age 
this.location = attributes.location 
}

speak(){
return ' Hello my name is ' + this.name + ' , I am from ' + this.location;
}
}


class Instructor extends Person
{constructor(attributes)
{
super(attributes);
this.specialty = attributes.specialty
this.favLanguage = attributes.favLanguage
this.catchPhrase = attributes.catchPhrase 

}

demo(){
    return ' Today we are learning about ' + this.subject;
}
grade(){
    return this.name + ' receives a perfect score on' + this.subject;
    }
}


class Student extends Person
{constructor(attributes)
{
super(attributes);
this.previousBackground = attributes.previousBackground
this.className = attributes.className 
this.favSubjects = attributes.favSubjects
}

listsSubjects(){
return this.favSubjects;
}
PRAssignment(){
    return this.name + ' has submitted a PR for ' + this.subject; 
    }
sprintChallenge(){
        return this.name + ' has begun sprint challenge on ' + this.subject; 
        }
}

class ProjectManager extends Instructor
{constructor(attributes)
{
super(attributes);
this.gradClassName = attributes.gradClassName
this.favInstructor = attributes.favInstructor
}

standUp(){
    return this.name + ' announes to ' + this.channel + ', @channel standby times! ';
}
debugsCode(){
    return this.name + ' debugs ' + this.name + 's code on ' + this.subject; 
    }
}

// testing classes with objects 

// 2 objects for person class 


const cooper = new Person({
    name: 'Cooper',
    age: 21, 
    location: 'Seattle',
  });

  const reese = new Person({
    name: 'Reese',
    age: 23, 
    location: 'Phoenix',
  });


  // 2 objects for instructor class - extends from person 

  const fred = new Instructor({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const john = new Instructor({
    name: 'John',
    age: 70,
    location: 'New York',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Forget the homies, chase the cash`
  });

  // 2 objects for student class - extends from student 

  const draymond = new Student({
    name: 'Draymond',
    age: 29, 
    location: 'San Fransisco',
    previousBackground: 'Basketball player',
    className: 'WEB21',
    favSubjects: ['Html', 'CSS', 'React']

  });

  const drake = new Student({
    name: 'Drake',
    age: 32, 
    location: 'Canada',
    previousBackground: 'Rapper',
    className: 'WEB21',
    favSubjects: ['Html', 'JavaScript', 'React']

  });

  // 2 objects for project manager class - extends from instructor 

  const steph = new ProjectManager({
    name: 'Steph',
    age: 31,
    location: 'Oakland',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `How do you like them apples`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
  });

  const kawhi = new ProjectManager({
    name: 'Kawhi',
    age: 27,
    location: 'Toronto',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `I am Queens Boulevard`,
    gradClassName: 'WEB12',
    favInstructor: 'Pop'
  });

  // testing using console.log

  console.log(reese.name); // Reese
  console.log(cooper.location); // Seattle 
  console.log(fred.catchPhrase); // Don't forget the homies 
  console.log(john.specialty); // Front-end 
  console.log(draymond.favSubjects); // ['Html', 'CSS', 'React']
  console.log(drake.previousBackground); // Rapper 
  console.log(steph.catchPhrase); // How do you like them apples 
  console.log(kawhi.favInstructor); // Pop 
