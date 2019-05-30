export default class TestRegex {

    test(elements, rules) {

        try {

            if (elements.length !== undefined || elements.length > 0) {
                // for (const element of elements) {
                //     const valid = this._testOne(element, rules);
                //     if (!valid) return false;
                // }
                for (var i = 0; i < elements.length; i++) {
                    // element[i]
                    const valid = this._testOne(elements[i], rules);
                    if (!valid) return false;
                    // return false;
                }

                // elements.forEach(element => {
                //     const valid = this._testOne(element, rules);
                //     if (!valid) return false;
                // })
                return true;

            } else {

                return this._testOne(elements, rules);

            }
        }
        catch(e){
            console.error("There was an error in comparing regex: ", e.name);
            return false;
        }
    }

    _testOne(element, rules) {
        const name = element.getAttribute("name");
        const rule = rules[name];
        return rule.test(element.value);
    }

}