<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('favoritos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->constrained('users')->onDelete('cascade');
            $table->morphs('favoritavel'); // favoritavel_id + favoritavel_type
            $table->timestamps();

            $table->unique(['usuario_id', 'favoritavel_type', 'favoritavel_id']);
            $table->index(['usuario_id', 'favoritavel_type']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('favoritos');
    }
};
