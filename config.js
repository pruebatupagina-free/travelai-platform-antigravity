/**
 * TravelAI Platform — Configuración Global
 * Adaptado para Google Gemini API (gratuita)
 */
const TRAVELAI_CONFIG = {
  version: "1.1.0",
  agencyName: "TravelAI Platform",
  apiEndpoint: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
  model: "gemini-2.0-flash",
  maxTokens: 2000,
  defaultLanguage: "es",
  sessionKeyName: "travelai_gemini_key",
  leadsStorageKey: "travelai_crm_leads",
};
