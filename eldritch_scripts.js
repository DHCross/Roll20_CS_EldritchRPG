on("change:prowess change:agility change:melee change:fortitude change:endurance change:strength change:competence change:willpower", function() {
    var prowess = parseInt(getAttrByName(characterId, "prowess"));
    var agility = parseInt(getAttrByName(characterId, "agility"));
    var melee = parseInt(getAttrByName(characterId, "melee"));
    var fortitude = parseInt(getAttrByName(characterId, "fortitude"));
    var endurance = parseInt(getAttrByName(characterId, "endurance"));
    var strength = parseInt(getAttrByName(characterId, "strength"));
    var competence = parseInt(getAttrByName(characterId, "competence"));
    var willpower = parseInt(getAttrByName(characterId, "willpower"));
    var activeDefense = prowess + agility + melee;
    var passiveDefense = fortitude + endurance + strength;
    var spiritPoints = competence + willpower;
    setAttrByName(characterId, "active_defense_hp", activeDefense);
    setAttrByName(characterId, "passive_defense_hp", passiveDefense);
    setAttrByName(characterId, "spirit_points", spiritPoints);
    setAttrByName(characterId, "calculated_active_defense_hp", activeDefense);
    setAttrByName(characterId, "calculated_passive_defense_hp", passiveDefense);
    setAttrByName(characterId, "calculated_spirit_points", spiritPoints);
  });