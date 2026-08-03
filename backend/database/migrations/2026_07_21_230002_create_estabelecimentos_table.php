<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('estabelecimentos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->constrained('users')->onDelete('restrict');
            $table->foreignId('categoria_id')->nullable()->constrained('categorias')->onDelete('set null');
            $table->string('nome');
            $table->string('slug')->unique();
            $table->text('descricao')->nullable();
            $table->string('endereco')->nullable();
            $table->string('cidade', 100)->nullable();
            $table->string('estado', 100)->nullable();
            $table->string('cep', 20)->nullable();
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->string('telefone', 20)->nullable();
            $table->string('site')->nullable();
            $table->boolean('verificado')->default(false);
            $table->boolean('faz_entrega')->default(false);
            $table->string('situacao')->default('rascunho'); // rascunho, publicado, arquivado, rejeitado
            $table->timestamps();
            $table->softDeletes();

            $table->index('situacao');
            $table->index('cidade');
            $table->index(['latitude', 'longitude']);
            $table->fullText(['nome', 'descricao']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('estabelecimentos');
    }
};
