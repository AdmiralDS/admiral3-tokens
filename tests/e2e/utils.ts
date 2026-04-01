/** Возвращает путь к internal playground сценарию для e2e. */
export const getPlaygroundScenarioPath = (scenarioId: string) => {
  return `/?scenario=${encodeURIComponent(scenarioId)}`;
};
