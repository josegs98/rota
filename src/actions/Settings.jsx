

export const defaultSettings = (settings) => {
    // Return action
    return {
      // Unique identifier
      type: 'DEFAULT_SETTINGS',
      // Payload
      settings:settings
    }
};