import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
        this.heroes = HEROES;
    }
    HeroesComponent.prototype.ngOnInit = function () { };
    HeroesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-heroes',
            templateUrl: './heros.component.html',
            styleUrls: ['./heros.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());
export { HeroesComponent };
//# sourceMappingURL=heros.component.js.map