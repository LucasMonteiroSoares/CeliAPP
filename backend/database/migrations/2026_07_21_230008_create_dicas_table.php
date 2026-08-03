<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dicas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->constrained('users')->onDelete('restrict');
            $table->foreignId('categoria_id')->nullable()->constrained('categorias')->onDelete('set null');
            $table->string('titulo');
            $table->string('slug')->unique();
            $table->text('resumo')->nullable();
            $table->longText('conteudo');
            $table->string('url_da_imagem')->nullable();
            $table->timestamp('publicado_em')->nullable();
            $table->string('situacao')->default('rascunho'); // rascunho, publicado, arquivado
            $table->timestamps();
            $table->softDeletes();

            $table->index('situacao');
            $table->index('publicado_em');
            $table->fullText(['titulo', 'resumo', 'conteudo']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dicas');
    }
};
