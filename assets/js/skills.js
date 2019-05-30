import As from './as';
import nav from './navigation';
import { wait, execWhenInView } from './helpers';


class Skills {

    constructor() {

        this.skillsData = require('./data/skills.json');
        this.skillsDiv = document.querySelector('#skills');
        this.skillsContainer = document.querySelector('#allSkills');

        execWhenInView(this.skillsDiv, this.initialize.bind(this));

    }

    async initialize() {
        let ms = 280;

        for (const item in this.skillsData) {

            const skill = document.createElement('div');
            skill.classList.add('skill', 'animated', 'bounceIn');

            const skillHeader = document.createElement('div');
            skillHeader.classList.add('skill-header');
            skillHeader.innerHTML = item;
            skill.appendChild(skillHeader);

            if (this.skillsData[item].length !== 0) {
                const skillContent = document.createElement('div');
                skillContent.classList.add('skill-content');
                skill.classList.add('expandable');

                this.skillsData[item].forEach( x => {
                    const subskill = document.createElement('div');
                    subskill.classList.add('subskill');
                    subskill.innerHTML = x;
                    skillContent.appendChild(subskill);
                });

                skill.appendChild(skillContent);
            }

            this.skillsContainer.appendChild(skill);

            if(skillHeader.parentElement.classList.contains('expandable')) {
                skillHeader.addEventListener('click', this.toggleSkill.bind(this, skillHeader));
            }

            await wait(ms);
            ms -= 10;

        }

    }


    toggleSkill(skillHeader) {
        nav.hide();
        As.accordion('.skill.expandable', '.show', skillHeader.parentNode);
    }

}

export default new Skills();