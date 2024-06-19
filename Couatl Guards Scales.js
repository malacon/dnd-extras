var iFileName = "Homebrew Syntax - MagicItemsList.js";

RequiredSheetVersion("13.0.6");

MagicItemsList["couatl guard's scales"] = {
    name: "Couatl Guard's Scales",
    sortname: "Couatl Scales",
    source: ["B", 0],
    type: "armor",
    rarity: "rare",
    attunement: true,
    weight: 45,
    prerequisite: "Requires attunement by a good-aligned creature",
    prereqeval: function(v) {
        return v.alignment && v.alignment.toLowerCase().indexOf("good") !== -1;
    },
    allowDuplicates: false,
    armorAdd: {
        options: ["Couatl Guard's Scales"]
    },
    description: "This enchanted armor is made from couatl scales that were collected by a generous celestial. You gain a +1 bonus to AC while you wear this armor. This armor does not impose disadvantage on Dexterity (Stealth) checks. Tooth and Scale: When you take damage from a creature within 10 feet of you, you can use your reaction to channel the good spirit within the armor and cause a bright, spectral couatl to appear above you. The spectral form strikes at the creature who damaged you, forcing it to make a DC 15 Dexterity saving throw. On a failure, the creature takes 4d10 radiant damage, or half as much damage on a success. Once this property of the armor has been used, it can't be used again until the following dawn. Flight of the Couatls: While you're attuned to 3 items with this feature, you gain a flying speed of 30 feet. If you already have a flying speed, this speed is in addition to your existing flying speed.",
    descriptionFull: "This enchanted armor is made from couatl scales that were collected by a generous celestial. You gain a +1 bonus to AC while you wear this armor. This armor does not impose disadvantage on Dexterity (Stealth) checks. Tooth and Scale: When you take damage from a creature within 10 feet of you, you can use your reaction to channel the good spirit within the armor and cause a bright, spectral couatl to appear above you. The spectral form strikes at the creature who damaged you, forcing it to make a DC 15 Dexterity saving throw. On a failure, the creature takes 4d10 radiant damage, or half as much damage on a success. Once this property of the armor has been used, it can't be used again until the following dawn. Flight of the Couatls: While you're attuned to 3 items with this feature, you gain a flying speed of 30 feet. If you already have a flying speed, this speed is in addition to your existing flying speed.",
    extraLimitedFeatures: [{
        name: "Tooth and Scale",
        usages: 1,
        recovery: "dawn",
        limfeaname: "Tooth and Scale",
        action: ["reaction", " (triggered)"]
    }],
    calcChanges: {
        speed: {
            field: "speed",
            modifier: function(spd, baseSpd, adjSpd, obj) {
                if (obj.type === "armor" && obj.name === "Couatl Guard's Scales" && obj.attuned) {
                    if (spd.fly > 0) spd.fly += 30;
                    else spd.fly = 30;
                }
            }
        }
    }
};
