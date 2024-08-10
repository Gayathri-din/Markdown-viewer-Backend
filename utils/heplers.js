exports.formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  
  exports.truncateText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + '...';
  };
  