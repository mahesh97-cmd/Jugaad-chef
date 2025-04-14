export function parseRecipe(rawRecipe) {
    const sections = rawRecipe.split(/\n(?=\d\.\s)/g); 
  
    const parsed = {
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
      tips: '',
    };
  
    sections.forEach(section => {
      if (section.startsWith('1.')) parsed.title = section.replace(/^1\.\sRecipe Name:\s*/i, '').trim();
      else if (section.startsWith('2.')) parsed.description = section.replace(/^2\.\sDescription:\s*/i, '').trim();
      else if (section.startsWith('3.')) parsed.ingredients = section.replace(/^3\.\sIngredients list:\s*/i, '').trim();
      else if (section.startsWith('4.')) parsed.instructions = section.replace(/^4\.\sStep-by-step cooking instructions:\s*/i, '').trim();
      else if (section.startsWith('5.')) parsed.tips = section.replace(/^5\.\sTips \(optional\):\s*/i, '').trim();
    });
  
    return parsed;
  }
  