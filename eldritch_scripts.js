on('change:prowess change:agility change:melee', () => {
    getAttrs(['prowess', 'agility', 'melee'], values => {
      const prowess = +values.prowess || 0;
      const agility = +values.agility || 0;
      const melee = +values.melee || 0;
      const activeDefenseHP = prowess + agility + melee;
      setAttrs({
        active_defense_hp: activeDefenseHP
      });
    });
  });
  
  on('change:fortitude change:endurance change:strength', () => {
    getAttrs(['fortitude', 'endurance', 'strength'], values => {
      const fortitude = +values.fortitude || 0;
      const endurance = +values.endurance || 0;
      const strength = +values.strength || 0;
      const passiveDefenseHP = fortitude + endurance + strength;
      setAttrs({
        passive_defense_hp: passiveDefenseHP
      });
    });
  });
  
  on('change:competence change:willpower', () => {
    getAttrs(['competence', 'willpower'], values => {
      const competence = +values.competence || 0;
      const willpower = +values.willpower || 0;
      const spiritPoints = competence + willpower;
      setAttrs({
        spirit_points: spiritPoints
      });
    });
  });