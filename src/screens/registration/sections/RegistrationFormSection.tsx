"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { contactInfo } from "@/constants/contacts";

export const RegistrationFormSection = (): React.JSX.Element => {
  const [formData, setFormData] = useState({
    nomeAluno: "",
    idade: "",
    nomeResponsavel: "",
    telefone: "",
    endereco: "",
    oficinas: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (oficina: string) => {
    setFormData((prev) => ({
      ...prev,
      oficinas: prev.oficinas.includes(oficina)
        ? prev.oficinas.filter((o) => o !== oficina)
        : [...prev.oficinas, oficina],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Nova Matrícula - FT Ramatis*%0A%0A` +
      `*Aluno:* ${formData.nomeAluno}%0A` +
      `*Idade:* ${formData.idade}%0A` +
      `*Responsável:* ${formData.nomeResponsavel}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `*Endereço:* ${formData.endereco}%0A` +
      `*Oficinas de Interesse:* ${formData.oficinas.join(", ") || "Não selecionada"}`;

    const whatsappUrl = `https://wa.me/55${contactInfo.whatsapp.replace(/[^\d]/g, "")}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="bg-background px-4 py-16">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-foreground/[0.02] border border-foreground/10 rounded-3xl p-8 md:p-12 shadow-sm">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Ficha de Inscrição</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="nomeAluno" className="text-sm font-medium text-foreground/70 ml-1">
                  Nome do Aluno
                </label>
                <input
                  required
                  type="text"
                  id="nomeAluno"
                  name="nomeAluno"
                  value={formData.nomeAluno}
                  onChange={handleChange}
                  className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                  placeholder="Nome completo"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="idade" className="text-sm font-medium text-foreground/70 ml-1">
                  Idade
                </label>
                <input
                  required
                  type="number"
                  id="idade"
                  name="idade"
                  value={formData.idade}
                  onChange={handleChange}
                  className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                  placeholder="Ex: 10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="nomeResponsavel" className="text-sm font-medium text-foreground/70 ml-1">
                Nome do Responsável
              </label>
              <input
                required
                type="text"
                id="nomeResponsavel"
                name="nomeResponsavel"
                value={formData.nomeResponsavel}
                onChange={handleChange}
                className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                placeholder="Nome do pai, mãe ou tutor"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="telefone" className="text-sm font-medium text-foreground/70 ml-1">
                Telefone / WhatsApp
              </label>
              <input
                required
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="endereco" className="text-sm font-medium text-foreground/70 ml-1">
                Endereço
              </label>
              <input
                required
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-foreground"
                placeholder="Rua, número, bairro"
              />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-foreground/70 ml-1 block">
                Oficinas de Interesse
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Capoeira",
                  "Flauta",
                  "Jogos e Brincadeiras",
                  "Socioeducativa",
                  "Dança",
                  "Circo",
                  "Grafitti",
                  "Canto e Violão",
                  "Futebol",
                ].map((oficina) => (
                  <label
                    key={oficina}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${
                      formData.oficinas.includes(oficina)
                        ? "bg-primary/5 border-primary text-primary"
                        : "bg-background border-foreground/10 text-foreground/70 hover:border-primary/50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-foreground/10 text-primary focus:ring-primary/20"
                      checked={formData.oficinas.includes(oficina)}
                      onChange={() => handleCheckboxChange(oficina)}
                    />
                    <span className="text-sm font-medium">{oficina}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button
                text="Enviar Matrícula"
                type="submit"
                size="lg"
                className="w-full justify-center text-lg py-6"
              />
            </div>
            
            <p className="text-center text-xs text-foreground/50 mt-4">
              Ao clicar em enviar, você será redirecionado para o nosso WhatsApp para concluir a inscrição.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
