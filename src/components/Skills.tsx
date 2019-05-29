import { h } from 'preact';

// interface Skill {
//   name: string;
//   subskills: string[];
// }

// const allSkils: Skill[] = [
//   { name: 'JavaScript', subskills: ['React', 'Vue'] },
//   { name: 'TypeScript', subskills: [] },
//   { name: 'Node', subskills: ['Express', 'NestJS', 'Koa'] },
//   { name: 'Flutter', subskills: ['Dart'] },
//   { name: 'PHP', subskills: ['Laravel', 'WordPress'] },
//   { name: '.NET Core', subskills: ['C#'] }
// ];

export default function Skills() {
  return (
    <div className="px-4 container mx-auto">
      {/* {allSkils.map((skill, i) => {
        return (
          <div key={i}>
            <h2 className="text-2xl py-2">{skill.name}</h2>
            <div>
              {skill.subskills.map(sub => (
                <div className="text-xl pl-5 py-2">{sub}</div>
              ))}
            </div>
          </div>
        );
      })} */}
      {/* I am mostly working in TypeScript,  */}
    </div>
  );
}
